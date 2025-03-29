import {useState} from 'react';

function TodoList(){
    const [todos,setTodos] = useState([]);
    const [temp,setTemp] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!temp.trim()) return;
        setTodos(prev => [
            ...prev,  //prev 데이터 풀어서 나열
            {
                id:prev.length+1,
                text:temp,
                isCheck : false
            }
        ])
        setTemp("");
    }

    const handleCheck = (id) => {
        setTodos(prev => 
            prev.map(todo =>
                todo.id === id ? {...todo,isCheck:true} : todo // 그냥 isCheck=true 바꾸면 불변성 깨짐
            )
        )
    }

    return(
        <div className="flex justify-center items-center bg-gray-200 p-5">
            <div className="shadow-lg rounded-lg p-6 w-full max-w-xl">
                <h1 className="text-2xl font-bold text-center mb-4">📌 TODO LIST 📌</h1> 
                <div className="space-y-2 mb-4">
                    {todos.map((todo) => (
                        <div className="flex items-center justify-between bg-gray-200 p-2 rounded">
                            <span>🛑</span>
                            <p className={todo.isCheck ? "line-through w-100 break-words overflow-wrap" : "w-100 break-words overflow-wrap"} key={todo.id}>{todo.text}</p>
                            <button onClick={() => handleCheck(todo.id)} className="w-20 rounded-lg border bg-green-500 text-white hover:bg-green-600 transition">완료</button>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                    <div className="flex flex-col gap-2 w-full">
                        <input
                            type="text"
                            value={temp}
                            onChange={(e) => setTemp(e.target.value)}
                            placeholder="내용을 입력하세요."
                            className="flex-1 border rounded-lg p-2"/>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">확인</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default TodoList;