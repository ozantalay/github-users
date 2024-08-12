import { useState } from "react";
import "./globals.css";

const UserSearch = ({ onSearch }) => {
  const [searchUser, setSearchUser] = useState("");

  const URL = `https://api.github.com/users/${searchUser}`;
  const userSearch = () => {
    fetch(URL)
    .then((response) => {
      if (!response.ok) throw new Error("Kullanıcı bulunamadı");
      return response.json();
    })
    .then((data) => {
      onSearch(data); // Arama sonucunu üst bileşene gönder
      setSearchUser(""); // Arama işlemi sonrası input'u temizle
    })
    .catch((err) => {
      console.error("Kullanıcı çekilemedi", err);
    });
};
  const handleSubmit = (event) => {
    event.preventDefault();
    userSearch(); 
  };

  return (
    <div className="user-search">
      <form onSubmit={handleSubmit}>
        <input
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          type="text"
          placeholder="Kullanıcı ismi giriniz"
        />
        <button type="submit" onClick={userSearch}>Search</button>
      </form>
    </div>
  );
};

export default UserSearch;
