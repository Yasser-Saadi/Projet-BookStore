import AddBook from "./Components/BookViews/AddBookComponent";
import { Routes, Route } from 'react-router-dom';
import EditBook from './Components/BookViews/EditBookComponent';
import DetailBook from './Components/BookViews/DetailBookComponent';
import EditCategorie from './Components/CategorieViews/EditCategorieComponent';
import AddCategorie from './Components/CategorieViews/AddCategorieComponent';
import Categories from './Components/CategorieViews/CategoriesComponent';
import CatBook from './Components/CategorieViews/BookCategorieComponent';
import AddUser from './Components/UserViews/AddUserComponent';
import Users from './Components/UserViews/UsersComponenet';
import EditUser from './Components/UserViews/EditUserComponent';
import AdminLayout from './Components/FixComponent/AdminLyout';
import ClientCategories from './Components/CategorieViews/ClientCategoriesComponent';
import ClientCatBook from './Components/CategorieViews/ClientBookCategorieComponent';
import ClientBooks from './Components/BookViews/ClientBooksComponent';
import ClientDetailBook from './Components/BookViews/ClientDetailBookComponent';
import Books from './Components/BookViews/BooksComponent';
import Authentification from "./Components/Authentification";
function App() {
  return (
    <>
      <Routes>
        <Route path='/Admin' element={<AdminLayout />}>
          <Route path="/Admin/Books" element={<Books />} />
          <Route path="/Admin/Catigories" element={<Categories />} />
          <Route path="/Admin/AddBook" element={<AddBook />} />
          <Route path="/Admin/CategorieBook/:id" element={<CatBook />} />
          <Route path="/Admin/EditBook/:id" element={<EditBook />} />
          <Route path="/Admin/DetailBook/:id" element={<DetailBook />} />
          <Route path="/Admin/EditCatigories/:id" element={<EditCategorie />} />
          <Route path="/Admin/AddCategorie" element={<AddCategorie />} />
          <Route path="/Admin/AddUser" element={<AddUser />} />
          <Route path="/Admin/EditUser/:id" element={<EditUser />} />
          <Route path="/Admin/Users" element={<Users />} />
          <Route path="/Admin/Login" element={<Authentification />} />
        </Route>
        <Route path='/' element={<Authentification />}>
          <Route path="/Client/Catigories" element={<ClientCategories />} />
          <Route path="/Client/CategorieBook/:id" element={<ClientCatBook />} />
          <Route path="/Client/Books" element={<ClientBooks />} />
          <Route path="/Client/DetailsBooks/:id" element={<ClientDetailBook />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;