for (var i = 0; i < 1000; i += 100) {
    for (var y = 0; y < 1000; y += 100) {
        var myCircle = new Path.Circle(new Point(i, y), 10);
        myCircle.fillColor = 'purple';
    }
}

// Grid of circles

// 0, 0 start every 100 pixels another circle

// Up to 1000