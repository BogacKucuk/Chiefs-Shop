import { useNavigate } from "react-router-dom";

import { DirectoryContainer, Body, BackgroundImage } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { title, imageUrl, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryContainer>
    )
}

export default DirectoryItem;