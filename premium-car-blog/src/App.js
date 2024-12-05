import React from 'react';
import Header from './components/Header/Header';
import HeroImages from './components/HeroImages/HeroImages';
import ImageWithText from './components/ImageWithText/ImageWithText';
import RightBlock from './components/RightBlock/RightBlock';
import PopularPosts from './components/PopularPosts/PopularPosts';
import Instagram from './components/Instagram/Instagram';
import Tags from './components/Tags/Tags';
import EmailNewsletter from './components/EmailNewsletter/EmailNewsletter';
import Pagination from './components/Pagination/Pagination';
import MostPopular from './components/MostPopular/MostPopular';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <HeroImages />
            <ImageWithText
                imageSrc="image1.png"
                title="One of Saturn’s largest rings may be newer than anyone"
                author="Rickie Baroch - June 6, 2019"
                description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
            />
            <ImageWithText
                imageSrc="image2.png"
                title="One of Saturn’s largest rings may be newer than anyone"
                author="Rickie Baroch - June 6, 2019"
                description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
            />
            <ImageWithText
                imageSrc="image3.png"
                title="One of Saturn’s largest rings may be newer than anyone"
                author="Rickie Baroch - June 6, 2019"
                description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
            />
            <ImageWithText
                imageSrc="image4.png"
                title="One of Saturn’s largest rings may be newer than anyone"
                author="Rickie Baroch - June 6, 2019"
                description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
            />
            <ImageWithText
                imageSrc="image5.png"
                title="One of Saturn’s largest rings may be newer than anyone"
                author="Rickie Baroch - June 6, 2019"
                description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem"
            />
            <RightBlock />
            <PopularPosts />
            <Instagram />
            <Tags />
            <EmailNewsletter />
            <Pagination />
            <MostPopular />
            <Footer />
        </div>
    );
};

export default App;