<form action="/image/upload" method="post" enctype="multipart/form-data">
    @csrf
    name
    <input type="text" name="name" >
    <input type="file" name="image" accept="image/*">
    <button type="submit">Upload</button>
</form>