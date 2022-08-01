import React, { useState, useEffect } from "react";

import { HomeStyle } from "./style";

import Box from "../../components/Box";
import Card from "../../components/Card";
import Music from "../../classes/Music";

const Home = () => {
  const [points, setPoints] = useState(0);
  const [image, setImage] = useState(1);
  const [boxes, SetBoxes] = useState([
    {
      id: 1,
      x: -3,
      y: 3,
      fruit: false,
      user: false,
    },
    {
      id: 2,
      x: -2,
      y: 3,
      fruit: false,
      user: false,
    },
    {
      id: 3,
      x: -1,
      y: 3,
      fruit: false,
      user: false,
    },
    {
      id: 4,
      x: 0,
      y: 3,
      fruit: false,
      user: false,
    },
    {
      id: 5,
      x: 1,
      y: 3,
      fruit: false,
      user: false,
    },
    {
      id: 6,
      x: 2,
      y: 3,
      fruit: false,
      user: false,
    },
    {
      id: 7,
      x: 3,
      y: 3,
      fruit: false,
      user: false,
    },
    {
      id: 8,
      x: -3,
      y: 2,
      fruit: false,
      user: false,
    },
    {
      id: 9,
      x: -2,
      y: 2,
      fruit: false,
      user: false,
    },
    {
      id: 10,
      x: -1,
      y: 2,
      fruit: false,
      user: false,
    },
    {
      id: 11,
      x: 0,
      y: 2,
      fruit: false,
      user: false,
    },
    {
      id: 12,
      x: 1,
      y: 2,
      fruit: false,
      user: false,
    },
    {
      id: 13,
      x: 2,
      y: 2,
      fruit: false,
      user: false,
    },
    {
      id: 14,
      x: 3,
      y: 2,
      fruit: false,
      user: false,
    },
    {
      id: 15,
      x: -3,
      y: 1,
      fruit: false,
      user: false,
    },
    {
      id: 16,
      x: -2,
      y: 1,
      fruit: false,
      user: false,
    },
    {
      id: 17,
      x: -1,
      y: 1,
      fruit: false,
      user: false,
    },
    {
      id: 18,
      x: 0,
      y: 1,
      fruit: false,
      user: false,
    },
    {
      id: 19,
      x: 1,
      y: 1,
      fruit: false,
      user: false,
    },
    {
      id: 20,
      x: 2,
      y: 1,
      fruit: false,
      user: false,
    },
    {
      id: 21,
      x: 3,
      y: 1,
      fruit: false,
      user: false,
    },
    {
      id: 22,
      x: -3,
      y: 0,
      fruit: false,
      user: false,
    },
    {
      id: 23,
      x: -2,
      y: 0,
      fruit: false,
      user: false,
    },
    {
      id: 24,
      x: -1,
      y: 0,
      fruit: false,
      user: false,
    },
    {
      id: 25,
      x: 0,
      y: 0,
      fruit: false,
      user: false,
    },
    {
      id: 26,
      x: 1,
      y: 0,
      fruit: false,
      user: false,
    },
    {
      id: 27,
      x: 2,
      y: 0,
      fruit: false,
      user: false,
    },
    {
      id: 28,
      x: 3,
      y: 0,
      fruit: false,
      user: false,
    },
    {
      id: 29,
      x: -3,
      y: -1,
      fruit: false,
      user: false,
    },
    {
      id: 30,
      x: -2,
      y: -1,
      fruit: false,
      user: false,
    },
    {
      id: 31,
      x: -1,
      y: -1,
      fruit: false,
      user: false,
    },
    {
      id: 32,
      x: 0,
      y: -1,
      fruit: false,
      user: false,
    },
    {
      id: 33,
      x: 1,
      y: -1,
      fruit: false,
      user: false,
    },
    {
      id: 34,
      x: 2,
      y: -1,
      fruit: false,
      user: false,
    },
    {
      id: 35,
      x: 3,
      y: -1,
      fruit: false,
      user: false,
    },
    {
      id: 36,
      x: -3,
      y: -2,
      fruit: false,
      user: false,
    },
    {
      id: 37,
      x: -2,
      y: -2,
      fruit: false,
      user: false,
    },
    {
      id: 38,
      x: -1,
      y: -2,
      fruit: false,
      user: false,
    },
    {
      id: 39,
      x: 0,
      y: -2,
      fruit: false,
      user: false,
    },
    {
      id: 40,
      x: 1,
      y: -2,
      fruit: false,
      user: false,
    },
    {
      id: 41,
      x: 2,
      y: -2,
      fruit: false,
      user: false,
    },
    {
      id: 42,
      x: 3,
      y: -2,
      fruit: false,
      user: false,
    },
    {
      id: 43,
      x: -3,
      y: -3,
      fruit: false,
      user: false,
    },
    {
      id: 44,
      x: -2,
      y: -3,
      fruit: false,
      user: false,
    },
    {
      id: 45,
      x: -1,
      y: -3,
      fruit: false,
      user: false,
    },
    {
      id: 46,
      x: 0,
      y: -3,
      fruit: false,
      user: false,
    },
    {
      id: 47,
      x: 1,
      y: -3,
      fruit: false,
      user: false,
    },
    {
      id: 48,
      x: 2,
      y: -3,
      fruit: false,
      user: false,
    },
    {
      id: 49,
      x: 3,
      y: -3,
      fruit: false,
      user: false,
    },
  ]);

  useEffect(() => {
    HandleGame();
  }, [points]);

  function HandleGame() {
    let user = Math.floor(Math.random() * boxes.length) + 1;
    let fruit = Math.floor(Math.random() * boxes.length) + 1;

    if (user === fruit) {
      user = Math.floor(Math.random() * boxes.length) + 1;
      fruit = Math.floor(Math.random() * boxes.length) + 1;
    }

    let current_boxes = boxes.map((box) => {
      box.user = false;
      box.fruit = false;
      return box;
    });

    current_boxes = boxes.map((box) => {
      if (box.id === user) {
        box.user = true;
      }

      if (box.id === fruit) {
        box.fruit = true;
      }

      return box;
    });

    SetBoxes(current_boxes);
  }

  function CheckPoint() {
    const user_position = boxes.find((row) => row.user);
    const fruit_position = boxes.find((row) => row.fruit);

    if (user_position.id === fruit_position.id) {
      setPoints(points + 1);

      if (image === 3) {
        setImage(1);
      } else {
        setImage(image + 1);
      }
    }
  }

  function Move(direction) {
    const move_direction = {
      ArrowUp: {
        y: 1,
        x: 0,
      },
      ArrowDown: {
        y: -1,
        x: 0,
      },
      ArrowLeft: {
        y: 0,
        x: -1,
      },
      ArrowRight: {
        y: 0,
        x: 1,
      },
    };

    const current_position = boxes.find((row) => row.user);
    const next_position = {
      y: move_direction[direction].y + current_position.y,
      x: move_direction[direction].x + current_position.x,
    };

    let is_accessible_position = false;
    let current_boxes = boxes.map((box) => {
      if (box.y === next_position.y && box.x === next_position.x) {
        box.user = true;
        is_accessible_position = true;
      }
      return box;
    });

    if (is_accessible_position) {
      current_boxes = current_boxes.map((box) => {
        if (box.id === current_position.id) {
          box.user = false;
        }
        return box;
      });
    }

    SetBoxes(current_boxes);
    CheckPoint();
  }

  function CheckKey(e) {
    const moves = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

    if (moves.includes(e.key)) {
      Move(e.key);
    }
  }

  return (
    <HomeStyle>
      <Music />
      <div>
        <p>Pontos: {points}</p>
        <input
          placeholder="Clique aqui para começar!"
          onKeyDown={(e) => CheckKey(e)}
        />
      </div>
      <br></br>
      <Card>
        {boxes.map((row) => (
          <Box image={image} key={row.id} id={row.id} fruit={row.fruit} user={row.user} />
        ))}
      </Card>
    </HomeStyle>
  );
};

export default Home;
