import {useState} from 'react';

function TodoList2(){
    const [todos, setTodos] = useState([]);
    const [temp, setTemp] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!temp.trim()) return;
        setTodos(prev => [
            ...prev,
            {
                id: prev.length + 1,
                text: temp,
                isCheck: false
            }
        ]);
        setTemp("");
    };

    const handleCheck = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, isCheck: !todo.isCheck } : todo
            )
        );
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-5">
            <div className="shadow-2xl rounded-xl p-6 w-full max-w-xl bg-gray-800">
                <h1 className="text-3xl font-extrabold text-center mb-6 text-cyan-300">🌙 TODO LIST 🌙</h1>
                <div className="space-y-3 mb-6">
                    {todos.map((todo) => (
                        <div key={todo.id} className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                            <span className="text-red-400">🛑</span>
                            <p className={`${todo.isCheck ? "line-through text-gray-400" : "text-white"} w-full mx-3 break-words`}>
                                {todo.text}
                            </p>
                            <button
                                onClick={() => handleCheck(todo.id)}
                                className="w-20 rounded-md border border-green-400 text-green-300 hover:bg-green-500 hover:text-black transition"
                            >
                                완료
                            </button>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        value={temp}
                        onChange={(e) => setTemp(e.target.value)}
                        placeholder="할 일을 입력하세요..."
                        className="border rounded-md p-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <button
                        type="submit"
                        className="bg-cyan-500 text-black font-semibold py-2 rounded-md hover:bg-cyan-400 transition"
                    >
                        추가하기
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TodoList2;
