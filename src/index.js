import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import Logout from './pages/Logout';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import Dashboard from './pages/Dashboard';
import AuthorPosts from './pages/AuthorPosts';
import CategoryPosts from './pages/CategoryPosts';
import Authors from './pages/Authors';
import CreatePost from './pages/CreatePost';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: "posts/:id", element: <PostDetails/>},
      {path: "register", element: <Register/>},
      {path: "login", element: <Login/>},
      {path: "profile/:id", element: <UserProfile/>},
      {path: "authors", element: <Authors/>},
      {path: "create", element: <CreatePost/>},
      {path: "posts/categories/:category", element: <CategoryPosts/>},
      {path: "posts/users/:id", element: <AuthorPosts/>},
      {path: "myposts/:id", element: <Dashboard/>},
      {path: "posts/:id/edit", element: <EditPost/>},
      {path: "posts/:id/delete", element: <DeletePost/>},
      {path: "logout", element: <Logout/>},
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
