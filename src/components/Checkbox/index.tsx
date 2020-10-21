import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
}

const Checkbox = ({
  label = 'oi',
  labelFor = '',
  labelColor = 'black'
}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input type="checkbox" id={labelFor} />
    {!!label && (
      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)

export default Checkbox
