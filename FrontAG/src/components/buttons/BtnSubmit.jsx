
const SubmitButton = ({ texto }) => {
  return (
    <Link to={to} className="router-link">
    <button type="submit">
      {texto}
    </button>
    </Link>
  )
}

export default SubmitButton