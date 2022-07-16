/*
Card function 
*/
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


class TerryCardField extends Card    {
    constructor(_title, _url, _snippet, _rank)   {
        super();
        this.setFields(_title, _url, _snippet, _rank);
    }

    setFields(_title, _url, _snippet, _rank, )  {
      this.state = {
        title: {_title},
        urls: {_url},
        snippets: {_snippet},
        rank: {_rank}
      };
    }
    

  render()    {
      return (
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {urls}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
  }
}

export default TerryCardField;
