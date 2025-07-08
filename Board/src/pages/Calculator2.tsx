import React, {useState} from 'react';

function Calculator2(){
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);

    const isValid = () => {
        return !(isNaN(Number(num1)) || isNaN(Number(num2)))
    }

    const handleOperation = (op: string) => {
        if(!isValid){
           alert("숫자를 맞게 입력했는지 확인해보세요🔥");
           return;
        }

        const n1 = Number(num1);
        const n2 = Number(num2);
        let res = 0;

        switch(op){
            case '+':
                res = n1 + n2;
                break;
            case '-':
                res = n1 - n2;
                break;
            case '*':
                res = n1 * n2;
                break;
            case '/':
                res = n1/n2;
                break;
        }
        setResult(res);
    }

    return(
        <div className = "flex bg-gray-900 justify-center items-center min-h-screen p-5">
            <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">아래의 빈칸에 숫자를 입력하세요.</h1>

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={num1}
                        placeholder="첫 번째 숫자"
                        onChange = {(e) => setNum1(e.target.value)}
                        className="border border-gray-300 p-3 rounded-md" />
                    <input
                        type="text"
                        value={num2}
                        placeholder="두 번째 숫자"
                        onChange = {(e) => setNum2(e.target.value)}
                        className="border border-gray-300 p-3 rounded-md" />
                    
                    <div className="grid grid-cols-2 gap-3 mt-2">
                        <button onClick={() => handleOperation('+')}
                            className="bg-red-500 text-white p-3 text-xl rounded-md hover:bg-red-600 transition"> + </button>
                        <button onClick={() => handleOperation('-')}
                            className="bg-green-500 text-white p-3 text-xl rounded-md hover:bg-green-600 transition"> - </button>
                        <button onClick={() => handleOperation('*')}
                            className="bg-blue-500 text-white p-3 text-xl rounded-md hover:bg-blue-600 transition"> x </button>
                        <button onClick={() => handleOperation('/')}
                            className="bg-yellow-500 text-white p-3 text-xl rounded-md hover:bg-yellow-600 transition"> % </button>
                    </div>
                    <div className="mt-4 p-5 rounded-lg bg-gray-100 border-2 border-indigo-500 shadow-sm">
                        <p className="text-gray-700 font-semibold text-lg">
                            계산 결과: <span className="text-indigo-600">{result !== null ? result : '결과 없음'}</span>
                        </p>
                    </div>
                </div>
                <p className="mt-6 text-sm text-center text-gray-400 italic">
                Made by JS
                </p>
            </div>
        </div>
    )

}
export default Calculator2;