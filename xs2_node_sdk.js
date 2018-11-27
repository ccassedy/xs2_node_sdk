// AuthAPI Methods
xs2_connection.prototype.SetDeviceKey = function(DeviceKey, OS, Brand, Model) { return this.try_invoke('SetDeviceKey', DeviceKey, OS, Brand, Model); };
xs2_connection.prototype.InitConnection = function(DeviceKey, OS, Brand, Model, IsMobileApp, Referrer, LandingPage) { return this.try_invoke('InitConnection', DeviceKey, OS, Brand, Model, IsMobileApp, Referrer, LandingPage); };
xs2_connection.prototype.Logout = function() { return this.try_invoke('Logout'); };

// TradeAPI Methods
xs2_connection.prototype.GetOrderBook = function(Market) { return this.try_invoke('GetOrderBook', Market); };
xs2_connection.prototype.PlaceBuyOrder = function(Market, Price, Amount) { return this.try_invoke('PlaceBuyOrder', Market, Price, Amount); };
xs2_connection.prototype.PlaceSellOrder = function(Market, Price, Amount) { return this.try_invoke('PlaceSellOrder', Market, Price, Amount); };
xs2_connection.prototype.PlaceBuyLiquidityOrder = function(Market, Price, Amount, CancelOrderID) { return this.try_invoke('PlaceBuyLiquidityOrder', Market, Price, Amount, CancelOrderID); };
xs2_connection.prototype.PlaceSellLiquidityOrder = function(Market, Price, Amount, CancelOrderID) { return this.try_invoke('PlaceSellLiquidityOrder', Market, Price, Amount, CancelOrderID); };
xs2_connection.prototype.CancelBuyOrder = function(OrderID) { return this.try_invoke('CancelBuyOrder', OrderID); };
xs2_connection.prototype.CancelSellOrder = function(OrderID) { return this.try_invoke('CancelSellOrder', OrderID); };
xs2_connection.prototype.CancelAllOrders = function() { return this.try_invoke('CancelAllOrders'); };
xs2_connection.prototype.GetAddressInfo = function(Coin, Address, Memo) { return this.try_invoke('GetAddressInfo', Coin, Address, Memo); };
xs2_connection.prototype.GetWalletAddress = function(Coin) { return this.try_invoke('GetWalletAddress', Coin); };
xs2_connection.prototype.CancelWithdrawal = function(WithdrawalID) { return this.try_invoke('CancelWithdrawal', WithdrawalID); };
xs2_connection.prototype.GetOrders = function(CreatedFrom, CreatedTo, Market, OrderType, OrderStatus) { return this.try_invoke('GetOrders', CreatedFrom, CreatedTo, Market, OrderType, OrderStatus); };
xs2_connection.prototype.GetTrades = function(CreatedFrom, CreatedTo, Market, TradeType) { return this.try_invoke('GetTrades', CreatedFrom, CreatedTo, Market, TradeType); };
xs2_connection.prototype.GetTax = function() { return this.try_invoke('GetTax'); };
xs2_connection.prototype.SubscribeToMarket = function(Market) { return this.try_invoke('SubscribeToMarket', Market); };
xs2_connection.prototype.UnsubscribeFromMarket = function() { return this.try_invoke('UnsubscribeFromMarket'); };

// InfoAPI Methods
xs2_connection.prototype.GetCoin = function(CoinID) { return this.try_invoke('GetCoin', CoinID); };
xs2_connection.prototype.GetTransparencyInfo = function() { return this.try_invoke('GetTransparencyInfo'); };
