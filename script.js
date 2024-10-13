document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        const videos = document.querySelectorAll('.video-item');

        videos.forEach(video => {
            if (filter === 'all' || video.getAttribute('data-category') === filter) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    });
});
