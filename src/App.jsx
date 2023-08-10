import React, { useState } from 'react'

const App = () => {

    const [newUser, setNewUser] = useState({
        username: 'john.doe@gmail.com',
        password: '123456'
    })

    const [username, setUsername] = useState("lrodriguez@4geeks.co")
    const [password, setPassword] = useState("123456")


    const handleChange = e => {
        // ejemplo 3
        /* const { name, value } = e.target;
        setNewUser((newUser) => {
            return { ...newUser, [name]: value }
        }) */

        // ejemplo 4
        const { name, value } = e.target;
        const obj = Object.assign({}, newUser);
        obj[name] = value;
        setNewUser(obj)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className='w-50 mx-auto'>
                        <form className="m-2 shadow" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group mb-2">
                                <label htmlFor="username" className="form-label">Username:</label>
                                <input type="email" name="email" id="username" className="form-control" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)} /> {/* Ejemplo 1 */}
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" name="password" id="password" className="form-control" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-success btn-sm gap-2">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div >

                    <div className='w-50 mx-auto'>
                        <form className="m-2 shadow" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group mb-2">
                                <label htmlFor="username" className="form-label">Username:</label>
                                <input type="email" name="username" id="username" className="form-control" value={newUser.username} placeholder='username' onChange={(e) => setNewUser({...newUser, username: e.target.value})} /> {/* Ejemplo 2 */}
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="username" className="form-label">Username:</label>
                                <input type="email" name="username" id="username" className="form-control" value={newUser.username} placeholder='username' onChange={handleChange} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" name="password" id="password" className="form-control" value={newUser.password} placeholder='password' onChange={handleChange} />
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-success btn-sm gap-2">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default App