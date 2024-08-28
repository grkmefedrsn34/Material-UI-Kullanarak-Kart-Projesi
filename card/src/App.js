import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Course from './course';
import Angular from '../src/images/Angular.jpeg';
import Bootstrap from '../src/images/boostrao.jpg'; // Bootstrap olarak düzelttim
import JavaScript from '../src/images/js.png'; // JavaScript olarak düzelttim
import Csharp from '../src/images/Artboard_4-8.png';


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular Kursu"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat architecto a mollitia! Fuga esse aspernatur consequuntur, distinctio beatae numquam. Quam inventore maiores quisquam impedit sapiente error ipsum amet magnam."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Bootstrap}
              title="Bootstrap 5 Kursu"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat architecto a mollitia! Fuga esse aspernatur consequuntur, distinctio beatae numquam. Quam inventore maiores quisquam impedit sapiente error ipsum amet magnam."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={JavaScript}
              title="JavaScript Kursu"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat architecto a mollitia! Fuga esse aspernatur consequuntur, distinctio beatae numquam. Quam inventore maiores quisquam impedit sapiente error ipsum amet magnam."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Csharp}
              title="C# Kursu"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat architecto a mollitia! Fuga esse aspernatur consequuntur, distinctio beatae numquam. Quam inventore maiores quisquam impedit sapiente error ipsum amet magnam."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
