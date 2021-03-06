import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import * as Styled from './styles';
import Card from '../../components/card';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { settings } from './helper';

interface stateProps {
  session: { token: string };
}

const MostViewedProducts = () => {
  const session = useSelector((state: stateProps) => state.session);
  const history = useHistory();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://capstone-q2.herokuapp.com/products', {
        headers: { Authorization: `Bearer ${session.token}` },
      })
      .then((res) => {
        const sortedProducts = res.data.sort((a: { views: string }, b: { views: string }) => {
          return parseInt(b.views) - parseInt(a.views);
        });
        setProducts(sortedProducts);
      })
      .catch(({ response }) => {
        if (response?.status === 401 && session.token != '') {
          Swal.fire({
            title: `Você foi deslogado! Faça o Login novamnte.`,
            confirmButtonText: `Ok`,
          }).then((result) => {
            if (result.isConfirmed) {
              history.push('/login');
            }
          });
        }
      });
  }, []);

  const goProductPage = (id: string) => {
    {
      id === 'unique_id' ? history.push('/') : history.push(`/products/${id}`);
    }
  };

  return (
    <div>
      <Styled.Title>
        <AiFillStar className="star-icon" />
        <h2>Mais procurados</h2>
      </Styled.Title>
      <Styled.CarouselContainer>
        <Slider {...settings}>
          {products &&
            products.map((product: any, key: number) => {
              return (
                <Card
                  key={key}
                  title={product.name}
                  category={`${product.category} / ${product.subCategory}`}
                  imgUrl={product.thumbnail}
                  onClick={() => goProductPage(product.id)}
                />
              );
            })}
        </Slider>
      </Styled.CarouselContainer>
      <Styled.Mobile>
        <Styled.MobileContainer>
          {products &&
            products.map((product: any, key) => {
              return (
                <Card
                  key={key}
                  title={product.name}
                  category={`${product.category} / ${product.subCategory}`}
                  imgUrl={product.thumbnail}
                  onClick={() => goProductPage(product.id)}
                />
              );
            })}
        </Styled.MobileContainer>
      </Styled.Mobile>
    </div>
  );
};

export default MostViewedProducts;
