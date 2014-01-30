var createRow = function(name, score, github){
    return {
        name: name,
        score: score,
        github: github
    }
};

var mockData = [
    createRow('Project Cool', '55', 'http://github.com/turowicz/cool'),
    createRow('Project Sad', '11', 'http://github.com/turowicz/fun'),
    createRow('Project Fun', '33', 'http://github.com/turowicz/sad')
];

