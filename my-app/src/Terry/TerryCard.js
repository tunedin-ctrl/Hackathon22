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
    constructor(_input_line, _url, _snippet, _rank)   {
        super();
        this.state = {
            input_line: {_input_line},
            urls: {_url},
            snippets: {_snippet},
            rank: {_rank}
        };
    }
    setInputLine(input_line)  {
      this.input_line = input_line;
    }
    

  render()    {
      return (
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {input_line}
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

export function f(input_line, urls) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {input_line}
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