import stocks from "./StockData";
import { Link } from "react-router-dom"

function Dashboard(props) {
  return (
    <div className="AllStocksData">
      {stocks.map((stock, idx) => {
        const { name, symbol, lastPrice, change, high, low, open } = stock;
        return (
          <div>
            <h1>Name: {name}</h1>
            <h2>Symbol: {symbol}</h2>
            <h3>Last Price: {lastPrice}</h3>
            <h3>Change: {change}</h3>
            <h3>High: {high}</h3>
            <h3>Low: {low}</h3>
            <h3>Open: {open}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard


