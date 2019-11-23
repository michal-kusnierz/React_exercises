import React from "react";
import { Header, Card, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { photos } from "../data";

const Photo = props => {
  const {
    imageUrl = "https://images.pexels.com/photos/948331/pexels-photo-948331.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description = "Unknown",
    createdAt = "Unknown"
  } = props;

  return (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
      <Icon name="close" size="medium" />
      <Card.Content>
        <Card.Header>{description}</Card.Header>
        <Card.Meta>
          <span className="date">{createdAt}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};
class PhotosApp extends React.Component {
  state = {
    photos: photos
  };

  deletePhoto = id => {
    const newPhotos = this.state.photos.filter(photo => photo.id !== id);

    this.setState({
      photos: newPhotos
    });
  };
  
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            onHide={() => {}}
            vertical
            visible={true}
            width="wide"
          >
            <Menu.Item as="a">Home</Menu.Item>
            <Menu.Item as="a">Games</Menu.Item>
            <Menu.Item as="a">Channels</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Card.Group>
                {this.state.photos.map(photo => (
                  <div
                    key={photo.id}
                    onClick={() => this.deletePhoto(photo.id)}
                  >
                    <Photo
                      imageUrl={photo.image}
                      description={photo.desc}
                      createdAt={photo.date}
                    />
                  </div>
                ))}
        
      </Card.Group>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default PhotosApp;