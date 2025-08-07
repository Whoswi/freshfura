import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.75rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// Each before/after pair now sits side‑by‑side (left = "przed", right = "po").
const Item = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: start;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Stack on narrow screens */
  }
`;

const Pair = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Subheading = styled.h3`
  font-size: 1rem;
  margin: 0.25rem 0;
  font-weight: 600;
`;

const Gallery = () => (
  <Wrapper id='Gallery'>
    <Title>Realizacje</Title>
    <Grid>
      <Item>
        <Pair>
          <Subheading>Przed czyszczeniem</Subheading>
          <Image src="zdj7.jpeg" alt="Przed czyszczeniem 1" />
        </Pair>
        <Pair>
          <Subheading>Po czyszczeniu</Subheading>
          <Image src="zdj8.jpeg" alt="Po czyszczeniu 1" />
        </Pair>
      </Item>

      <Item>
        <Pair>
          <Subheading>Przed czyszczeniem</Subheading>
          <Image src="zdj3.jpeg" alt="Przed czyszczeniem 2" />
        </Pair>
        <Pair>
          <Subheading>Po czyszczeniu</Subheading>
          <Image src="zdj4.jpeg" alt="Po czyszczeniu 2" />
        </Pair>
      </Item>

      <Item>
        <Pair>
          <Subheading>Przed czyszczeniem</Subheading>
          <Image src="zdj6.jpeg" alt="Przed czyszczeniem 3" />
        </Pair>
        <Pair>
          <Subheading>Po czyszczeniu</Subheading>
          <Image src="zdj5.jpeg" alt="Po czyszczeniu 3" />
        </Pair>
      </Item>

      <Item>
        <Pair>
          <Subheading>Przed czyszczeniem</Subheading>
          <Image src="zdj9.jpeg" alt="Przed czyszczeniem 4" />
        </Pair>
        <Pair>
          <Subheading>Po czyszczeniu</Subheading>
          <Image src="zdj10.jpeg" alt="Po czyszczeniu 4" />
        </Pair>
      </Item>
    </Grid>
  </Wrapper>
);

export default Gallery;
