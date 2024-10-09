
import HomePage from "./routes/homePage/homePage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage";
import Card from "./components/card/Card";
import ProfilePage from "./routes/profilePage/ProfilePage";
import List from "./components/list/list";

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

import SinglePage from "./routes/singlePage/singlePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
          
        },
        
        {
          path:"/py",
          element:<ProfilePage/>
          
        },
        {
          path:"/login",
          element:<Login/>
          
        }
      
        
        
        
      ]
      
    }
   
  ]);

  return (
   
<RouterProvider router={router}/>
  );
}

export default App