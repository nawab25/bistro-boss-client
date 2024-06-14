import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className="px-24 pt-10 pb-20">
            <SectionTitle subHeading='What Our Clients Say' heading='Testimonials'></SectionTitle>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper mt-14">                
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="flex flex-col justify-center items-center text-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="w-4/5 mx-auto pt-5 pb-2">{review.details}</p>
                                <h1 className="text-yellow-600 uppercase text-xl">{review.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
            </Swiper>
        </div>
    );
};

export default Testimonials;