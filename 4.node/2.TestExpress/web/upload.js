var path = new Map();

function upload(request,response){
    response.end('finish');
}

path.set('/upload',upload);

module.exports.path = path;