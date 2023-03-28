import './Login.css'

export const Login = () => {
  return (
    <div className="login">
        <form action="" >
            <label htmlFor="name"> What's Your Name?
            </label>
            <input type="text" id='name' name='name'  />
            <input type="submit" id='submit' value='Iniciar' />
        </form>
    </div>
  )
}
