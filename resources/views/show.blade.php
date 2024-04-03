@foreach($images as $image)
    <img src="{{ asset($image->path) }}" alt="{{ $image->name }}">
@endforeach