<template>
    <footer>
        <p>© Vaudaux 2024</p>
  </footer>
</template>

<style>
footer {
    height: 64px;
    background-color: #7B6E68;
    display: flex;
    justify-content: center;
    align-items: center;
}

  footer p {
      color: #fff;
      font-family: 'Noto Serif Display';
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      margin: 0;
    }
    
    @media screen and (min-width: 1100px) {
        .logo-home {
            height: 60px;
        }
        
        footer {
            height: 116px;
            
        }
        
        footer p {
            font-size: 15px;
        }
    }
    
</style>