import { Card, Flex } from 'antd';
import type { CSSProperties } from 'react';

type PlayerCardProps = {
  title: string;
  description: string;
  style?: CSSProperties;
  onSelect: () => void;
};

function PlayerCard({ title, description, style, onSelect }: PlayerCardProps) {
  return (
      <>
        <Flex gap='large' justify='center' align='center'>
          <Card
              title={title} size="default"
              style={{ width: 300, margin: 20, ...style }}
              onClick={onSelect}>
            <p>{description}</p>
          </Card>
        </Flex>
      </>
  )
}

export default PlayerCard
