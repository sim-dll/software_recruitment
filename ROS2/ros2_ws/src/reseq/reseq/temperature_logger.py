import rclpy
from rclpy.node import Node
from std_msgs.msg import Float32
from datetime import datetime

class TemperatureLogger(Node):
    def __init__(self, filename = "log.txt"):
        super().__init__('temperature_logger')
        self.filename = filename
        
        self.sub = self.create_subscription(
            Float32,
            '/temperature',
            self.callback,
            10
        )
        # self.get_logger().info("Logger avviato")

    def callback(self, temperature: Float32):
        temp_val = temperature.data
        # print("lettura:", temp_val)
        
        if temp_val >= 50.0:
            ora = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            log_msg = f"[{ora}] WARNING high temp: {temp_val:.2f} C"
            self.get_logger().info(log_msg)
            
            f = open(self.filename, "a")
            f.write(f"{ora} - Temp: {temp_val:.2f} C\n")
            f.close()


def main(args=None):
    rclpy.init(args=args)

    logger = TemperatureLogger("log.txt")

    rclpy.spin(logger)

    logger.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
