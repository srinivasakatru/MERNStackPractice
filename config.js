const env = process.env;

export const loagStars = function(message){
    console.info("***********");
    console.info(message);
    console.info("***********");
}

export default {
    PORT : env
}