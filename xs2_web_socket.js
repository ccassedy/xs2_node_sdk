XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
WebSocket = require('websocket').w3cwebsocket;
const signalR = require("@aspnet/signalr");

function xs2_connection(api_key) {
    var self = this;
    self.web_socket = null;
    self.connected = false;
    self.handlers = {};
    self.api_key = api_key || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    console.log("Creating connection with API Key: " + self.api_key);
}

xs2_connection.prototype.try_invoke = function (...param) {
    try {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.web_socket.invoke(...param).then(function (api_result) {
                if (api_result["action"] !== "error" || api_result["message"] !== "Busy") {
                    resolve(api_result);
                }
                else {
                    setTimeout(function () {
                        self.web_socket.try_invoke(...param).then(resolve);
                    }, 500);
                }
            });
        });
    }
    catch (error) {
        console.log('Retry invoke due to exception');

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                self.web_socket.try_invoke(...param).then(resolve);
            }, 500);
        });
    }
};

xs2_connection.prototype.on = function (name, func) {
    this.handlers[name] = func;
};

xs2_connection.prototype.start = function () {
    var self = this;

    if (self.web_socket !== null) {
        self.clear_web_socket();
    }

    self.web_socket = new signalR.HubConnectionBuilder().withUrl('https://xs2.exchange/trade').build();
    self.web_socket.onclose(function (error) {
        self.connected = false;
    });

    for (var name in self.handlers) {
        self.web_socket.on(name, self.handlers[name]);
    }

    return new Promise(function (resolve, reject) {
        self.web_socket.start()
            .then(function () {
                console.log('Web Socket Ready');
                self.connected = true;

                self.InitConnection(self.api_key, null, null, null, false, null, null).then(function (result) {
                    console.log('Connected');
                    resolve();
                }).catch(function (error) {
                    console.log("Error sending API key ", error);
                    reject();
                });
            })
            .catch(function (error) {
                console.log('Web Socket Error', error);
                self.connected = false;
                reject();
            });
    });
};

xs2_connection.prototype.clear_web_socket = function () {
    var self = this;
    if (self.web_socket.methods) {
        self.web_socket.methods = {};
    }
    if (self.web_socket.closedCallbacks.length) {
        self.web_socket.closedCallbacks.pop();
    }
    if (self.web_socket.connection) {
        if (self.web_socket.connection.transport) {
            try {
                self.web_socket.connection.transport.stop();
            }
            catch (e) { console.log(e.message); }
        }
        try {
            self.web_socket.connection.stop();
        }
        catch (e) { console.log(e.message); }
    }
    try {
        self.web_socket.stop();
    }
    catch (e) { console.log(e.message); }
    self.web_socket = null;
    console.log("Old web-socket cleared...");
};

xs2_connection.prototype.poll_connection = function () {
    var self = this;
    if (!self.connected) {
        self.start_web_socket();
        setTimeout(self.poll_connection, 10000);
    }
    else {
        setTimeout(self.poll_connection, 1000);
    }
};

// AuthAPI Methods
xs2_connection.prototype.SetDeviceKey = function (DeviceKey, OS, Brand, Model) { return this.try_invoke('SetDeviceKey', DeviceKey, OS, Brand, Model); };
xs2_connection.prototype.InitConnection = function (DeviceKey, OS, Brand, Model, IsMobileApp, Referrer, LandingPage) { return this.try_invoke('InitConnection', DeviceKey, OS, Brand, Model, IsMobileApp, Referrer, LandingPage); };
xs2_connection.prototype.Logout = function () { return this.try_invoke('Logout'); };

// TradeAPI Methods
xs2_connection.prototype.GetOrderBook = function (Market) { return this.try_invoke('GetOrderBook', Market); };
xs2_connection.prototype.PlaceBuyOrder = function (Market, Price, Amount) { return this.try_invoke('PlaceBuyOrder', Market, Price, Amount); };
xs2_connection.prototype.PlaceSellOrder = function (Market, Price, Amount) { return this.try_invoke('PlaceSellOrder', Market, Price, Amount); };
xs2_connection.prototype.PlaceBuyLiquidityOrder = function (Market, Price, Amount, CancelOrderID) { return this.try_invoke('PlaceBuyLiquidityOrder', Market, Price, Amount, CancelOrderID); };
xs2_connection.prototype.PlaceSellLiquidityOrder = function (Market, Price, Amount, CancelOrderID) { return this.try_invoke('PlaceSellLiquidityOrder', Market, Price, Amount, CancelOrderID); };
xs2_connection.prototype.CancelBuyOrder = function (OrderID) { return this.try_invoke('CancelBuyOrder', OrderID); };
xs2_connection.prototype.CancelSellOrder = function (OrderID) { return this.try_invoke('CancelSellOrder', OrderID); };
xs2_connection.prototype.CancelAllOrders = function () { return this.try_invoke('CancelAllOrders'); };
xs2_connection.prototype.GetAddressInfo = function (Coin, Address, Memo) { return this.try_invoke('GetAddressInfo', Coin, Address, Memo); };
xs2_connection.prototype.GetWalletAddress = function (Coin) { return this.try_invoke('GetWalletAddress', Coin); };
xs2_connection.prototype.CancelWithdrawal = function (WithdrawalID) { return this.try_invoke('CancelWithdrawal', WithdrawalID); };
xs2_connection.prototype.GetOrders = function (CreatedFrom, CreatedTo, Market, OrderType, OrderStatus) { return this.try_invoke('GetOrders', CreatedFrom, CreatedTo, Market, OrderType, OrderStatus); };
xs2_connection.prototype.GetTrades = function (CreatedFrom, CreatedTo, Market, TradeType) { return this.try_invoke('GetTrades', CreatedFrom, CreatedTo, Market, TradeType); };
xs2_connection.prototype.GetTax = function () { return this.try_invoke('GetTax'); };
xs2_connection.prototype.SubscribeToMarket = function (Market) { return this.try_invoke('SubscribeToMarket', Market); };
xs2_connection.prototype.UnsubscribeFromMarket = function () { return this.try_invoke('UnsubscribeFromMarket'); };

// InfoAPI Methods
xs2_connection.prototype.GetCoin = function (CoinID) { return this.try_invoke('GetCoin', CoinID); };
xs2_connection.prototype.GetTransparencyInfo = function () { return this.try_invoke('GetTransparencyInfo'); };

var xs2 = new xs2_connection();
xs2.on("InfoPack", function (data) { console.log(data.length); });
xs2.start().then(function () {
    xs2.GetTransparencyInfo().then(function (data) {
        console.log(data);
    });
});


setInterval(() => { }, 1 << 30);


