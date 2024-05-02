import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import colors from "tailwindcss/colors";

const stepVariants = cva("h-1 rounded-sm", {
  variants: {
    active: {
      true: "bg-primary",
      false: "bg-zinc-200",
    },
  },
  defaultVariants: {
    active: false,
  },
});

export interface MultiStepProps {
  currentStep?: number;
}

export function MultiStep({ currentStep = 1 }: MultiStepProps) {
  return (
    <div className="mt-4">
      <span className="text-sm text-muted-foreground">
        Passo {currentStep} de 2
      </span>
      <div className="grid grid-cols-2 gap-2 mb-1">
        {Array.from({ length: 2 }, (_, i) => i + 1).map((step) => {
          let status =
            currentStep === step
              ? "active"
              : currentStep < step
                ? "inactive"
                : "complete";

          return (
            <motion.div
              animate={status}
              key={step}
              className="relative rounded-sm bg-zinc-200 h-1"
            >
              <motion.div
                animate={status}
                variants={{
                  inactive: {
                    width: 0,
                    backgroundColor: colors.purple[600],
                  },
                  active: {
                    scale: 1,
                    width: "100%",
                    transition: {
                      delay: 0,
                      duration: 0.3,
                    },
                    backgroundColor: colors.purple[600],
                  },
                  complete: {
                    width: "100%",
                    backgroundColor: colors.purple[600],
                    transition: {
                      delay: 0,
                      duration: 0.3,
                    },
                  },
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  type: "tween",
                  ease: "circOut",
                }}
                className="absolute inset-0 rounded-sm w-0"
              ></motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
