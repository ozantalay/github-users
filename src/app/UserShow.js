const UserShow = ({user}) => {
  return (
    <div className="user-show">
     <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={user.login} width={100} height={100} />
      <p>{user.type}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        Profiline Git
      </a>
    </div>
  )
}
export default UserShow