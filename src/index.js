import React, {useState} from "react"
import ReactDOM from "react-dom"
import "./style.css"
import axios from "axios";

const App = () => {
    const [numb, setNumb] = useState(1)
    const [from, setFrom] = useState("USD")
    const [to, setTo] = useState("EUR")
    const [curr, setCurr] = useState([])

    const getCurr = (from, to) => {
    axios({
        method: "GET",
        url: `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=8cee2d51cbf1f48b8961`,
    })
        .then((response) => {
            console.log(response.data)
            setCurr(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    return (
        <>
            <h1 id="title">Currency converter</h1>
            <div id="conv">
                <div id="result">{numb} {from} = {numb * curr[`${from}_${to}`]} {to}</div>
                <div id="middle">
                    <br />
                <h3 id="from">From</h3>
                <div id="fr">
                <select className="ui dropdown" value={from} onChange={(e) => setFrom(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="PLN">PLN</option>
                    <option value="CZK">CZK</option>
                    <option value="JPY">JPY</option>
                </select>
                </div>
                <h3 id="to">To</h3>
                <div id="t">
                <select className="ui dropdown" value={to} onChange={(e) => setTo(e.target.value)}>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="PLN">PLN</option>
                    <option value="CZK">CZK</option>
                    <option value="JPY">JPY</option>
                </select>
                </div>
                </div>
                <div id="bottom">
                <div className="ui input">
                    <input type="text" placeholder="Amount" value={numb} onChange={(e) => setNumb(e.target.value)}/>
                </div>
                    <button className="ui button" onClick={() => {getCurr(from, to)}}>Convert</button> 
                </div>
            </div> 
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))