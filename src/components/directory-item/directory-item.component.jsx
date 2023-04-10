import { DirectoryContainer, Body, BackgroundImage } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {

    const { title, imageUrl } = category;

    return (
        <DirectoryContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryContainer>
    )
}

export default DirectoryItem;