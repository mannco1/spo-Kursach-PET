import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const SquareForms = ({firstP, secondP}) => {
  
      const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
          },
          {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
          },
          {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
          },
          {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
          },
          {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
          },
          {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
          },
          {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
          },
          {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
          },
          {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
          },
          {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
          },
          {
              img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
              title: 'Breakfast',
              author: '@bkristastucchio',
            },
            {
              img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              title: 'Burger',
              author: '@rollelflex_graphy726',
            },
            {
              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              title: 'Camera',
              author: '@helloimnik',
            },
            {
              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              title: 'Coffee',
              author: '@nolanissac',
            },
            {
              img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
              title: 'Hats',
              author: '@hjrc33',
            },
            {
              img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
              title: 'Honey',
              author: '@arwinneil',
            },
            {
              img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
              title: 'Basketball',
              author: '@tjdragotta',
            },
            {
              img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
              title: 'Fern',
              author: '@katie_wasserman',
            },
            {
              img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
              title: 'Mushrooms',
              author: '@silverdalex',
            },
            {
              img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
              title: 'Tomato basil',
              author: '@shelleypauls',
            },
            {
              img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
              title: 'Sea star',
              author: '@peterlaster',
            },
            {
              img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
              title: 'Bike',
              author: '@southside_customs',
            },
            {
              img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
              title: 'Breakfast',
              author: '@bkristastucchio',
            },
            {
              img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              title: 'Burger',
              author: '@rollelflex_graphy726',
            },
            {
              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              title: 'Camera',
              author: '@helloimnik',
            },
            {
              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              title: 'Coffee',
              author: '@nolanissac',
            },
            {
              img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
              title: 'Hats',
              author: '@hjrc33',
            },
            {
              img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
              title: 'Honey',
              author: '@arwinneil',
            },
            {
              img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
              title: 'Basketball',
              author: '@tjdragotta',
            },
            {
              img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
              title: 'Fern',
              author: '@katie_wasserman',
            },
            {
              img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
              title: 'Mushrooms',
              author: '@silverdalex',
            },
            {
              img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
              title: 'Tomato basil',
              author: '@shelleypauls',
            },
            {
              img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
              title: 'Sea star',
              author: '@peterlaster',
            },
            {
              img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
              title: 'Bike',
              author: '@southside_customs',
            },
            {
              img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
              title: 'Breakfast',
              author: '@bkristastucchio',
            },
            {
              img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              title: 'Burger',
              author: '@rollelflex_graphy726',
            },
            {
              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              title: 'Camera',
              author: '@helloimnik',
            },
            {
              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              title: 'Coffee',
              author: '@nolanissac',
            },
            {
              img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
              title: 'Hats',
              author: '@hjrc33',
            },
            {
              img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
              title: 'Honey',
              author: '@arwinneil',
            },
            {
              img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
              title: 'Basketball',
              author: '@tjdragotta',
            },
            {
              img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
              title: 'Fern',
              author: '@katie_wasserman',
            },
            {
              img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
              title: 'Mushrooms',
              author: '@silverdalex',
            },
            {
              img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
              title: 'Tomato basil',
              author: '@shelleypauls',
            },
            {
              img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
              title: 'Sea star',
              author: '@peterlaster',
            },
            {
              img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
              title: 'Bike',
              author: '@southside_customs',
            },
            {
              img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
              title: 'Breakfast',
              author: '@bkristastucchio',
            },
            {
              img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              title: 'Burger',
              author: '@rollelflex_graphy726',
            },
            {
              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              title: 'Camera',
              author: '@helloimnik',
            },
            {
              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              title: 'Coffee',
              author: '@nolanissac',
            },
            {
              img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
              title: 'Hats',
              author: '@hjrc33',
            },
            {
              img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
              title: 'Honey',
              author: '@arwinneil',
            },
            {
              img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
              title: 'Basketball',
              author: '@tjdragotta',
            },
            {
              img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
              title: 'Fern',
              author: '@katie_wasserman',
            },
            {
              img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
              title: 'Mushrooms',
              author: '@silverdalex',
            },
            {
              img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
              title: 'Tomato basil',
              author: '@shelleypauls',
            },
            {
              img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
              title: 'Sea star',
              author: '@peterlaster',
            },
            {
              img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
              title: 'Bike',
              author: '@southside_customs',
            },
            {
              img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
              title: 'Breakfast',
              author: '@bkristastucchio',
            },
            {
              img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
              title: 'Burger',
              author: '@rollelflex_graphy726',
            },
            {
              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
              title: 'Camera',
              author: '@helloimnik',
            },
            {
              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
              title: 'Coffee',
              author: '@nolanissac',
            },
            {
              img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
              title: 'Hats',
              author: '@hjrc33',
            },
            {
              img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
              title: 'Honey',
              author: '@arwinneil',
            },
            {
              img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
              title: 'Basketball',
              author: '@tjdragotta',
            },
            {
              img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
              title: 'Fern',
              author: '@katie_wasserman',
            },
            {
              img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
              title: 'Mushrooms',
              author: '@silverdalex',
            },
            {
              img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
              title: 'Tomato basil',
              author: '@shelleypauls',
            },
            {
              img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
              title: 'Sea star',
              author: '@peterlaster',
            },
            {
              img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
              title: 'Bike',
              author: '@southside_customs',
            },
            {
                img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                title: 'Breakfast',
                author: '@bkristastucchio',
              },
              {
                img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                title: 'Burger',
                author: '@rollelflex_graphy726',
              },
              {
                img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                title: 'Camera',
                author: '@helloimnik',
              },
              {
                img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                title: 'Coffee',
                author: '@nolanissac',
              },
              {
                img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                title: 'Hats',
                author: '@hjrc33',
              },
              {
                img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                title: 'Honey',
                author: '@arwinneil',
              },
              {
                img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                title: 'Basketball',
                author: '@tjdragotta',
              },
              {
                img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                title: 'Fern',
                author: '@katie_wasserman',
              },
              {
                img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                title: 'Mushrooms',
                author: '@silverdalex',
              },
              {
                img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                title: 'Tomato basil',
                author: '@shelleypauls',
              },
              {
                img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                title: 'Sea star',
                author: '@peterlaster',
              },
              {
                img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                title: 'Bike',
                author: '@southside_customs',
              },
              {
                  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                  title: 'Breakfast',
                  author: '@bkristastucchio',
                },
                {
                  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                  title: 'Burger',
                  author: '@rollelflex_graphy726',
                },
                {
                  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                  title: 'Camera',
                  author: '@helloimnik',
                },
                {
                  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                  title: 'Coffee',
                  author: '@nolanissac',
                },
                {
                  img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                  title: 'Hats',
                  author: '@hjrc33',
                },
                {
                  img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                  title: 'Honey',
                  author: '@arwinneil',
                },
                {
                  img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                  title: 'Basketball',
                  author: '@tjdragotta',
                },
                {
                  img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                  title: 'Fern',
                  author: '@katie_wasserman',
                },
                {
                  img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                  title: 'Mushrooms',
                  author: '@silverdalex',
                },
                {
                  img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                  title: 'Tomato basil',
                  author: '@shelleypauls',
                },
                {
                  img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                  title: 'Sea star',
                  author: '@peterlaster',
                },
                {
                  img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                  title: 'Bike',
                  author: '@southside_customs',
                },
                {
                  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                  title: 'Breakfast',
                  author: '@bkristastucchio',
                },
                {
                  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                  title: 'Burger',
                  author: '@rollelflex_graphy726',
                },
                {
                  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                  title: 'Camera',
                  author: '@helloimnik',
                },
                {
                  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                  title: 'Coffee',
                  author: '@nolanissac',
                },
                {
                  img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                  title: 'Hats',
                  author: '@hjrc33',
                },
                {
                  img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                  title: 'Honey',
                  author: '@arwinneil',
                },
                {
                  img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                  title: 'Basketball',
                  author: '@tjdragotta',
                },
                {
                  img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                  title: 'Fern',
                  author: '@katie_wasserman',
                },
                {
                  img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                  title: 'Mushrooms',
                  author: '@silverdalex',
                },
                {
                  img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                  title: 'Tomato basil',
                  author: '@shelleypauls',
                },
                {
                  img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                  title: 'Sea star',
                  author: '@peterlaster',
                },
                {
                  img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                  title: 'Bike',
                  author: '@southside_customs',
                },
                {
                  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                  title: 'Breakfast',
                  author: '@bkristastucchio',
                },
                {
                  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                  title: 'Burger',
                  author: '@rollelflex_graphy726',
                },
                {
                  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                  title: 'Camera',
                  author: '@helloimnik',
                },
                {
                  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                  title: 'Coffee',
                  author: '@nolanissac',
                },
                {
                  img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                  title: 'Hats',
                  author: '@hjrc33',
                },
                {
                  img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                  title: 'Honey',
                  author: '@arwinneil',
                },
                {
                  img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                  title: 'Basketball',
                  author: '@tjdragotta',
                },
                {
                  img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                  title: 'Fern',
                  author: '@katie_wasserman',
                },
                {
                  img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                  title: 'Mushrooms',
                  author: '@silverdalex',
                },
                {
                  img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                  title: 'Tomato basil',
                  author: '@shelleypauls',
                },
                {
                  img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                  title: 'Sea star',
                  author: '@peterlaster',
                },
                {
                  img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                  title: 'Bike',
                  author: '@southside_customs',
                },
                {
                  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                  title: 'Breakfast',
                  author: '@bkristastucchio',
                },
                {
                  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                  title: 'Burger',
                  author: '@rollelflex_graphy726',
                },
                {
                  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                  title: 'Camera',
                  author: '@helloimnik',
                },
                {
                  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                  title: 'Coffee',
                  author: '@nolanissac',
                },
                {
                  img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                  title: 'Hats',
                  author: '@hjrc33',
                },
                {
                  img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                  title: 'Honey',
                  author: '@arwinneil',
                },
                {
                  img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                  title: 'Basketball',
                  author: '@tjdragotta',
                },
                {
                  img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                  title: 'Fern',
                  author: '@katie_wasserman',
                },
                {
                  img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                  title: 'Mushrooms',
                  author: '@silverdalex',
                },
                {
                  img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                  title: 'Tomato basil',
                  author: '@shelleypauls',
                },
                {
                  img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                  title: 'Sea star',
                  author: '@peterlaster',
                },
                {
                  img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                  title: 'Bike',
                  author: '@southside_customs',
                },
                {
                  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                  title: 'Breakfast',
                  author: '@bkristastucchio',
                },
                {
                  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
                  title: 'Burger',
                  author: '@rollelflex_graphy726',
                },
                {
                  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                  title: 'Camera',
                  author: '@helloimnik',
                },
                {
                  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                  title: 'Coffee',
                  author: '@nolanissac',
                },
                {
                  img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                  title: 'Hats',
                  author: '@hjrc33',
                },
                {
                  img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
                  title: 'Honey',
                  author: '@arwinneil',
                },
                {
                  img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
                  title: 'Basketball',
                  author: '@tjdragotta',
                },
                {
                  img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                  title: 'Fern',
                  author: '@katie_wasserman',
                },
                {
                  img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
                  title: 'Mushrooms',
                  author: '@silverdalex',
                },
                {
                  img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
                  title: 'Tomato basil',
                  author: '@shelleypauls',
                },
                {
                  img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
                  title: 'Sea star',
                  author: '@peterlaster',
                },
                {
                  img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                  title: 'Bike',
                  author: '@southside_customs',
                },
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
          author: '@bkristastucchio',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          author: '@helloimnik',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          author: '@nolanissac',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          author: '@hjrc33',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          author: '@arwinneil',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
          author: '@tjdragotta',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
          author: '@katie_wasserman',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
          author: '@silverdalex',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
          author: '@shelleypauls',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
          author: '@peterlaster',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
          author: '@southside_customs',
        },
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
          },
          {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
          },
          {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
          },
          {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
          },
          {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
          },
          {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
          },
          {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
          },
          {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
          },
          {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
          },
          {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
          },
          {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
          },
          {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
          },
          {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
          },
          {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
          },
          {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
          },
          {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
          },
          {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
          },
          {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
          },
          {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
          },
          {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
          },
          {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
          },
          {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
          },
          {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
          },
          {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
          },
          {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
          },
          {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
          },
          {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
          },
          {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
          },
          {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
          },
          {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
          },
          {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
          },
          {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
          },
          {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
          },
          {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
          },
          {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
          },
          {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
          },
          {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
          },
          {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
          },
          {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
          },
          {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
          },
          {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
          },
          {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
          },
          {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
          },
          {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
          },
          {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
          },
          {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
          },
          {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
          },
          {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
          },
          {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
          },
          {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
          },
      ].slice(firstP, secondP); 

    return (
        <div style={{ width: '1120px', overflow: 'hidden',margin:'6vw 0 0 0' }}>
            <h1 style={{color:'gray', padding:'10px 10px 10px '}}>Buy <span  style={{color:'white', fontFamily: "UnifrakturCook, cursive"}}>MUSIC</span> to support the scene</h1>
        <ImageList sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', overflow: 'hidden', width: '100%' }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{ width: '265px', margin: '6px' }}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={ <h1 style={{fontSize:'1.5rem',color:'white',fontFamily:'JetBrains Mono'}}>{item.title}</h1>}
                subtitle={<span style={{fontFamily:'JetBrains Mono',color:'white'}}>by: {item.author}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
        
      </div>
      
    );
};

export default SquareForms;