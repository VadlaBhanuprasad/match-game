import './index.css'

const Thumbnails = props => {
  const {thumbnail, selectedImage} = props
  const {id, imageUrl, thumbnailUrl, category} = thumbnail

  const selectImage = () => {
    selectedImage(id)
  }
  return (
    <li className="image-list">
      <button className="btn" onClick={selectImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}
export default Thumbnails
