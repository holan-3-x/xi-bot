<form action="/image/upload" method="post" enctype="multipart/form-data">
    <?php echo csrf_field(); ?>
    name
    <input type="text" name="name" >
    <input type="file" name="image" accept="image/*">
    <button type="submit">Upload</button>
</form><?php /**PATH C:\laragon\www\xibot\resources\views/upload.blade.php ENDPATH**/ ?>