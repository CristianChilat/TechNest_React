import styles from './carousel.module.css'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import React, {useCallback} from 'react'
import imagesData from "./imagesData";

function Carousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: 'center',
		containScroll: 'trimSnaps'
	}, [Autoplay()]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<div className={styles.carouselContainer}>
			<div className={styles.viewport} ref={emblaRef}>
				<div className={styles.slideContainer}>

					{imagesData.map((image, index) => (
						<div className={styles.slide} key={index}>
							<img src={image} alt={image.alt} />
						</div>
					))}
				</div>
			</div>
			<div className={[styles.prevButton, styles.controlButton].join(' ')} onClick={scrollPrev}>
				&larr;
			</div>
			<div className={[styles.nextButton, styles.controlButton].join(' ')} onClick={scrollNext}>
				&rarr;
			</div>
		</div>

	)
}

export default Carousel