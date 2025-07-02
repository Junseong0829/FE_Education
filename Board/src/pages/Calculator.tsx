import React, {useState} from 'react';

function Calculator(){
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const Add = () => {
        if(isNaN(num1) || isNaN(num2)){
            alert("💢숫자만 입력해주세요!!");
        }
        else{
            setResult(Number(num1)+Number(num2))
        }
    }

    const Minus = () => {
        if(isNaN(num1) || isNaN(num2)){
            alert("💢숫자만 입력해주세요!!");
        }
        else{
            setResult(Number(num1)-Number(num2))
        }
    }
    return(
        <div className="flex shadow-lg border rounded-xl justify-center items-center bg-gray-200 p-5 w-full">
            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    value={num1}
                    placeholder="첫 번째 숫자"
                    onChange={(e) => setNum1(e.target.value)}
                    className="p-5 border rounded-xl"
                />
                <input
                    type="text"
                    value={num2}
                    placeholder="두 번째 숫자"
                    onChange={(e) => setNum2(e.target.value)}
                    className="p-5 border rounded-xl"
                />
            </div>
            <div className="">
                <button onClick={Add} className="bg-green-300 hover:bg-green-400 rounded-lg transition p-6 m-6 w-30">더하기</button>
                <button onClick={Minus} className="bg-red-300 hover:bg-red-400 rounded-lg transition p-6 m-6 w-30">빼기</button>
                <p className="mb-4 ml-7">결과 : {result}</p>
            </div>
        </div>
    )
}
export default Calculator;