// AuthAPI Methods
xs2_connection.prototype.InitConnection = function(DeviceKey, OS, Brand, Model, IsMobileApp, Referrer, LandingPage) { return this.try_invoke('InitConnection', DeviceKey, OS, Brand, Model, IsMobileApp, Referrer, LandingPage); };
xs2_connection.prototype.Logout = function() { return this.try_invoke('Logout'); };

// TradeAPI Methods
xs2_connection.prototype.Get24HrSummaries = function() { return this.try_invoke('Get24HrSummaries'); };
xs2_connection.prototype.Get24HrSummary = function(Market) { return this.try_invoke('Get24HrSummary', Market); };
xs2_connection.prototype.GetOrderBook = function(Market) { return this.try_invoke('GetOrderBook', Market); };
xs2_connection.prototype.GetHistoricTrades = function(Market, BeforeID) { return this.try_invoke('GetHistoricTrades', Market, BeforeID); };
xs2_connection.prototype.GetChart = function(Market, Interval, Start, End) { return this.try_invoke('GetChart', Market, Interval, Start, End); };
xs2_connection.prototype.SubscribeToMarket = function(Market) { return this.try_invoke('SubscribeToMarket', Market); };
xs2_connection.prototype.UnsubscribeFromMarket = function() { return this.try_invoke('UnsubscribeFromMarket'); };
xs2_connection.prototype.GetWallets = function() { return this.try_invoke('GetWallets'); };
xs2_connection.prototype.GetDeposits = function() { return this.try_invoke('GetDeposits'); };
xs2_connection.prototype.GetWithdrawals = function() { return this.try_invoke('GetWithdrawals'); };
xs2_connection.prototype.PlaceBuyOrder = function(Market, Price, Amount) { return this.try_invoke('PlaceBuyOrder', Market, Price, Amount); };
xs2_connection.prototype.PlaceSellOrder = function(Market, Price, Amount) { return this.try_invoke('PlaceSellOrder', Market, Price, Amount); };
xs2_connection.prototype.PlaceBuyLiquidityOrder = function(Market, Price, Amount, CancelOrderID) { return this.try_invoke('PlaceBuyLiquidityOrder', Market, Price, Amount, CancelOrderID); };
xs2_connection.prototype.PlaceSellLiquidityOrder = function(Market, Price, Amount, CancelOrderID) { return this.try_invoke('PlaceSellLiquidityOrder', Market, Price, Amount, CancelOrderID); };
xs2_connection.prototype.CancelBuyOrder = function(OrderID) { return this.try_invoke('CancelBuyOrder', OrderID); };
xs2_connection.prototype.CancelSellOrder = function(OrderID) { return this.try_invoke('CancelSellOrder', OrderID); };
xs2_connection.prototype.CancelAllOrders = function() { return this.try_invoke('CancelAllOrders'); };
xs2_connection.prototype.GetWalletAddress = function(Coin) { return this.try_invoke('GetWalletAddress', Coin); };
xs2_connection.prototype.CancelWithdrawal = function(WithdrawalID) { return this.try_invoke('CancelWithdrawal', WithdrawalID); };
xs2_connection.prototype.GetOrders = function(CreatedFrom, CreatedTo, Market, OrderType, OrderStatus) { return this.try_invoke('GetOrders', CreatedFrom, CreatedTo, Market, OrderType, OrderStatus); };
xs2_connection.prototype.GetTrades = function(CreatedFrom, CreatedTo, Market, TradeType) { return this.try_invoke('GetTrades', CreatedFrom, CreatedTo, Market, TradeType); };
xs2_connection.prototype.GetTax = function() { return this.try_invoke('GetTax'); };

// InfoAPI Methods
xs2_connection.prototype.Ping = function() { return this.try_invoke('Ping'); };
xs2_connection.prototype.Time = function() { return this.try_invoke('Time'); };
xs2_connection.prototype.GetInfoPack = function() { return this.try_invoke('GetInfoPack'); };
xs2_connection.prototype.GetCustomerInfo = function() { return this.try_invoke('GetCustomerInfo'); };
xs2_connection.prototype.GetCoin = function(CoinID) { return this.try_invoke('GetCoin', CoinID); };
xs2_connection.prototype.GetTransparencyInfo = function() { return this.try_invoke('GetTransparencyInfo'); };
