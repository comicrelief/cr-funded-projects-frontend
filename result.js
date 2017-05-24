export const Result = ({result}) => (

  <div className="result">

    <div className="result__inner">

      <section className="single-msg paragraph single-msg--copy-right">

        <div className="single-msg__outer-wrapper">

          <div className="single-msg__image">

            <picture>
              <source srcset="http://kidsblogclub.com/wp-content/uploads/2013/02/team-honk-comic-relief-postcard.jpg"
                      media="all and (min-width: 1024px)" type="image/jpeg"/>
              <source srcset="http://kidsblogclub.com/wp-content/uploads/2013/02/team-honk-comic-relief-postcard.jpg"
                      media="all and (min-width: 740px)" type="image/jpeg"/>
              <source srcset="http://kidsblogclub.com/wp-content/uploads/2013/02/team-honk-comic-relief-postcard.jpg"
                      media="(min-width: 0px)" type="image/jpeg"/>
              <img src="http://kidsblogclub.com/wp-content/uploads/2013/02/team-honk-comic-relief-postcard.jpg"
                   alt="boring" typeof="foaf:Image"/>
            </picture>

          </div>

          <div className="single-msg__copy_wrapper">

            <div className="single-msg__copy">

              <div className="single-msg__title">
                <h3><strong>{result.full_name}</strong></h3>
              </div>

              <div className="single-msg__body">

                <p>
                  {result.description}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  </div>
);
