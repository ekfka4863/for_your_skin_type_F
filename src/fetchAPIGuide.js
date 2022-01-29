// skinType - 보낼때
fetch('http://localhost:9090/items/skintype', {   //  items/skintype
   method: 'POST',
   body: {
      임의로성정한key : {
         "skinType": "민감성"              
      }
   }
});

// brand - 보낼때
fetch('http://localhost:9090/____', {   //    items/drjart / items/innisfree / ...                                                                       
   method: 'POST',
   body: {
      임의로성정한key : {
         "brand": "drjart"         
      }
   }
});

// ========================
