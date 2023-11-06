SELECT 
    *
FROM carousel;

UPDATE carousel
SET title = '',
    image = ''
WHERE id = 1;

UPDATE carousel
SET is_active = '0'
WHERE id = 1;

SELECT * FROM statistics;