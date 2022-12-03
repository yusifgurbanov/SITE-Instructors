function render(data) {

    var html= "<div class='comentBox'><div class='leftPanelImg'><img src='https://www.freeiconspng.com/minicovers/school-student-icon-16.png'/></div><div class='rightPanel'><span>"+ data.name + "</span><div class='date'>"+ data.date+"</div><p>"+ data.body +"</p></div><div class='clear'></div></div>";
    $('#container').append(html);

};


$(document).ready(function(){
    
    var coment=[
        {"name":"Information System", "date": "2023", "body":"he is awesome"},
    ];
    
    for( var i=0; i< coment.length; i++) {
        render(coment[i]);
        
    }
    $('#addComent').click(function(){
        var addobj={
            "name": $('#name').val(),
            "date": $('#date').val(),
            "body": $('#bodyText').val()
        };
        coment.push(addobj);
        render(addobj);
        $('#name').val('');
        $('#date').val('');
        $('#bodyText').val('');
        
    });
   

});