import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library ?</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight icon={<FontAwesomeIcon icon="bolt" />}/>
                        <div className="highlight">
                            <div className="highlight__img">
                                
                            </div>
                            <h3 className="highlight__subtitle">Easy and Quick</h3>
                            <p className="highlight__para">
                                Get access to the book you purchased online instantly.
                            </p>
                        </div>
                    </div>
                    <div className="highlight__wrapper">
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon="book-open" />
                            </div>
                            <h3 className="highlight__subtitle">10,000+ Books</h3>
                            <p className="highlight__para">
                                Library has books in all your favourite categories.
                            </p>
                        </div>
                    </div>
                    <div className="highlight__wrapper">
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon="tags" />
                            </div>
                            <h3 className="highlight__subtitle">Affordable</h3>
                            <p className="highlight__para">
                                Get your hands on popular books for as little as $10
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
