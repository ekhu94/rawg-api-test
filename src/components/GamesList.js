import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGames } from '../actions';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Container, Row, Col } from 'react-bootstrap';

const GamesList = ({ getGames, games, search }) => {

    useEffect(() => {
        getGames();
    }, []);

    const renderGames = () => {
        return games.map(game => {
            return (
                <Col key={game.id} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <Image src={game.background_image} ui={false} />
                        <Card.Content>
                        <Card.Header>{game.name}</Card.Header>
                        <Card.Description>
                            {game.rating}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a target="_blank" href={game.clip ? game.clip.clip : null}>
                            <Icon name='gamepad' />
                            Video Link
                        </a>
                        </Card.Content>
                    </Card>
                </Col>
            );
        });
    };

    return (
        <Container>
            <Row className="justify-content-center">
                {renderGames()}
            </Row>
        </Container>
    );
};

const mapStateToProps = state => {
    return { games: state.games, search: state.search }
};

export default connect(mapStateToProps, { getGames })(GamesList);