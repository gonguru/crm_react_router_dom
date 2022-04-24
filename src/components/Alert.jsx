import '../styles/Alert.css'

const Alert = ({children}) => {
  return (
    <div className="text-red-500 text-right text-xs">
        {children}
    </div>
  )
}

export default Alert