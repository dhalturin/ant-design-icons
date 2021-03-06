// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SwitcherFilledSvg from '@ant-design/icons-svg/lib/asn/SwitcherFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitcherFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SwitcherFilledSvg}></AntdIcon>;
};

SwitcherFilled.displayName = 'SwitcherFilled';
SwitcherFilled.inheritAttrs = false;
export default SwitcherFilled;