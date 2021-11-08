import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Link } from 'react-router-dom'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

export default function PostListCard ({ post }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }


  return (

    <div className='postcard_container'>
      <Card sx={{ minWidth: 500, maxWidth: 500 }}>
        <Link to='/detailpost'>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label='your image'>
                R
              </Avatar>
        }
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
        }
            title='러닝메이트 모집 '
            subheader={Date(post.createdAt)}
          />
        </Link>
        <Link to='/detailpost'>
          <CardMedia
            component='img'
            height='194'
            image={post.thumbnail_url}
            alt='Your image'
          />
        </Link>
        <CardContent>
          <Typography variant='body2 h1' color='text.secondary' style={{ fontWeight: 900, fontSize: 20 }}>
            {post.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>{post.text}</Typography>

          </CardContent>
        </Collapse>
      </Card>
    </div>
  )
}
