import config, {loagStars} from "./config"
import https from 'https';

console.log(config)

loagStars("Hello")

https.get("https://www.lynda.com",function(response){
    console.info("response"+response.statusCode)

    response.on("data",function(chunk){
        console.info(chunk.toString())
    })
});

// https.get("https://www.lynda.com",response=>{
//     console.info("response"+response.statusCode)

//     response.on("data",function(chunk){
//         console.info(chunk.toString())
//     })
// });

// ES2015 format of writing code
