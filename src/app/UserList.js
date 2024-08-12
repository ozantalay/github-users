import UserShow from "./UserShow"

const UserList = ({users}) => {
  return (
    <div className="user-list">
      {users && users.map((user)=>(
        <UserShow key={user.id} user={user} />
      ))}
    </div>
  )
}
export default UserList